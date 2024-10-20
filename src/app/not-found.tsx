import UnderMaintenance from "./[locale]/UnderMaintenance";

export default function NotFound() {
  return (
    <UnderMaintenance redirectTo={process.env.INSTAGRAM_URL!} />
  );
}
