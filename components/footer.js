export default function Footer() {
  return (
    <footer className="bg-yellow-700">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://einargudni.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Einar Guðni
          </a>{" "}
          using{" "}
          <a
            href="https://github.com/oddstronaut/next-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Next + Tailwind Starter
          </a>
        </li>

        <li>
          <a
            href="https://einargudni.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            einargudni.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
