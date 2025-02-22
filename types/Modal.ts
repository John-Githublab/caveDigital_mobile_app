export interface Content {
  title: string;
  description: string;
  actions: any[];
  handleConfirm: () => void;
  data?: any;
}
