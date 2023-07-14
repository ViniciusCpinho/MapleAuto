import React from "react";

interface RoutesObject {
    name: string;
    route:string;
    component: React.ComponentType;
}

export interface RoutesType {
    [key:string]: RoutesObject
}

