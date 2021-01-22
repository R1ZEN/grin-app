declare module "*.svg?sprite" {
  const content: string | import('react').FC;
  export default content;
}