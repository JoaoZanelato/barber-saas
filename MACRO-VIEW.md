# Visão Macro e Regras de Negócio: Ecossistema BarbAgenda

Este documento descreve a arquitetura lógica e os fluxos operacionais do projeto **BarbAgenda**, servindo como guia de contexto para desenvolvimento e integração de IA.

---

## 1. Arquitetura Multi-tenant
O BarbAgenda é uma plataforma SaaS onde a isolação de dados ocorre ao nível do `tenant` (barbearia).
* **Isolamento de Recursos**: Entidades como profissionais (`users`), serviços, horários e agendamentos estão obrigatoriamente vinculados a um `tenant_id`.
* **Identidade da Loja**: Cada barbearia possui um `slug` único para rotas web e dados de perfil (logo, descrição e morada normalizada).

## 2. Gestão de Clientes (Dualidade)
O sistema opera com dois modelos de clientes para garantir flexibilidade:
* **App Clients (`app_clients`)**: Usuários registados via aplicação móvel com autenticação (telefone/PIN). Possuem favoritos e histórico global.
* **Customers (`customers`)**: Registos locais de cada barbearia. Usados para clientes que agendam via web ou presencialmente.
* **Vínculo Inteligente**: No agendamento, o sistema prioriza o `app_client_id`, mas mantém um registo em `customers` para manter a base de dados da barbearia íntegra.

## 3. Motor de Disponibilidade (Scheduling Engine)
A lógica de horários é o componente mais crítico do sistema:
* **Slots de Tempo**: Gerados em intervalos de 30 minutos (ex: 14:00, 14:30).
* **Duração de Serviço**: Embora os serviços tenham durações variáveis, o cálculo de disponibilidade utiliza uma base de 45 minutos para garantir margem de manobra.
* **Conflitos e Bloqueios**: Um horário só é considerado livre se não colidir com:
    1. Agendamentos existentes (não cancelados).
    2. Bloqueios manuais do barbeiro (`blocked_slots`).
    3. Horários de almoço definidos em `operating_hours`.
* **Regra de Passado**: Horários anteriores ao momento atual (com tolerância de 5 min) são ocultados automaticamente.

## 4. Ciclo de Vida do Agendamento
* **Criação Segura**: O backend recalcula o preço total e a duração com base nos IDs dos serviços, ignorando valores enviados pelo front-end para evitar fraudes.
* **Notificações**: A criação de um agendamento dispara automaticamente uma notificação push para o profissional responsável via Expo SDK.
* **Status e Histórico**: Os agendamentos podem ser cancelados ou reagendados. No caso de reagendamento, o novo registo aponta para o ID original (`original_appointment_id`) para fins de auditoria.

## 5. Estrutura de Dados Core (Prisma)
* **Tenants**: O nó central do grafo.
* **Appointments**: Tabela de junção que liga Tenant, Profissional (User), Serviço e Cliente.
* **Operating Hours**: Define os limites diários e intervalos de descanso.
* **Reviews**: Avaliações vinculadas exclusivamente a clientes que utilizam a aplicação móvel.