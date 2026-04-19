import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export class BlockedSlotController {
  async index(req: Request, res: Response) {
    const tenant_id = req.tenant_id;
    const slots = await prisma.blocked_slots.findMany({
      where: { tenant_id },
      orderBy: { start_time: "asc" },
    });
    return res.json(slots);
  }

  async store(req: Request, res: Response) {
    const { user_id, start_time, end_time, reason } = req.body;
    const tenant_id = req.tenant_id;

    if (!start_time || !end_time) {
      return res
        .status(400)
        .json({ error: "start_time e end_time são obrigatórios." });
    }

    const slot = await prisma.blocked_slots.create({
      data: {
        tenant_id,
        user_id: user_id || null,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        reason: reason || null,
      },
    });

    return res.status(201).json(slot);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const tenant_id = req.tenant_id;

    const slot = await prisma.blocked_slots.findFirst({
      where: { id, tenant_id },
    });

    if (!slot) {
      return res.status(404).json({ error: "Bloqueio não encontrado." });
    }

    await prisma.blocked_slots.delete({ where: { id } });
    return res.status(204).send();
  }
}
