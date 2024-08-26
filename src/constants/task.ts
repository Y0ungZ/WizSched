export type EventType = Omit<GoogleAppsScript.Calendar.Schema.Event, 'id'> & { id: string };
export type ContainerType = Record<string, EventType[]>;
