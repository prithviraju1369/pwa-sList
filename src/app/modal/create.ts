export interface create{
    title?: string;
    description?: string;
    name?: string;
    email?: string;
    users?: user[];
}

export interface user{
    name?: string;
    email?: string;
}