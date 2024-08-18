import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </main>
  );
}
