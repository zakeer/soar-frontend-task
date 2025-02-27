export interface Contact {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TransferData {
  contacts: Contact[];
}
