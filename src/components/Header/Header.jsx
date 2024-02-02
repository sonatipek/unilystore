import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import Button from "../ui/Button";
import { CartContext } from "../../contexts/CartContext";

const navigation = [
  { name: "Link -1", href: "#", current: true },
  { name: "Link -2", href: "#", current: false },
  { name: "Link -3", href: "#", current: false },
  { name: "Link -4", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { offCanvasState, setOffCanvasState, products } =
    useContext(CartContext);

  const totalItemsInCart = products.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);


  return (
    <header>
      <Disclosure as="nav" className="shadow py-1">
        {({ open }) => (
          <>
            <div className="mx-auto px-6 sm:px-8 lg:px-48">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-600">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-start md:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <a
                      href="/"
                      className="items-center justify-center gap-3 hidden md:flex"
                    >
                      <img
                        src="/unily_logo.svg"
                        alt="unily logo"
                        className="size-12"
                      />
                      <h1 className="text-2xl font-bold text-indigo-950">
                        Unily Store
                      </h1>
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block lg:mr-12">
                    <ul className="flex items-center justify-center gap-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          className={classNames(
                            item.current ? "underline" : "",
                            "rounded-md px-3 py-2 text-sm font-medium text-indigo-950 underline-offset-8 decoration-2 hover:underline decoration-indigo-500"
                          )}
                        >
                          <a
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Button
                    badge={{
                      initialValue: !totalItemsInCart ? 0 : totalItemsInCart,
                    }}
                    icon={{ setIcon: <ShoppingCartIcon className="size-5" /> }}
                    className="rounded-full !text-indigo-950 !bg-transparent"
                    onClick={() =>
                      setOffCanvasState(offCanvasState ? false : true)
                    }
                  >
                    Sepetim
                  </Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "underline"
                        : "",
                      "block px-3 py-2 text-base font-medium underline-offset-4 decoration-2"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
