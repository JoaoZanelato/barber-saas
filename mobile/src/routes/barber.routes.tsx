import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Store } from "lucide-react-native";
import { colors } from "../theme/colors";

// Importação das telas
import { BarberDashboard } from "../screens/Barber/Home";
import { StoreConfig } from "../screens/Barber/StoreConfig";
import { Availability } from "../screens/Barber/Availability";
import { BarberAgenda } from "../screens/Barber/Agenda";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BarberTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#18181B",
          borderTopColor: "#27272A",
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#71717A",
      }}
    >
      {/* Tela Principal (Home) */}
      <Tab.Screen
        name="BarberHome"
        component={BarberDashboard}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />

      {/* Tela de Configuração da Loja */}
      <Tab.Screen
        name="StoreConfig"
        component={StoreConfig}
        options={{
          tabBarIcon: ({ color }) => <Store color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Availability"
        component={Availability}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

export function BarberRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BarberTabs" component={BarberTabs} />
      <Stack.Screen name="BarberAgenda" component={BarberAgenda} />
    </Stack.Navigator>
  );
}
