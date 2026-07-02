export interface RuditoForm {
  servicio: string;
  nombre: string;
  telefono: string;
  observaciones: string;
}

export interface RuditoProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}
