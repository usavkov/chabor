import UnderMaintenance from "./UnderMaintenance";

export default function Home() {
  return (
    <UnderMaintenance redirectTo={process.env.INSTAGRAM_URL!} />
  );
}
