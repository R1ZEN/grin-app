declare module "*.svg?sprite" {
  const content: string | import('react').FC<Partial<{ fill: string; width: string }>>;
  export default content;
}