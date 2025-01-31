import { useState } from "react";
import cx from "classnames";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Icon from "src/components/Icon";

import { data } from "../usage-sample-data";

const Sample = ({ className }) => {
  const [selected, setSelect] = useState(data[0]);

  return (
    <div className={cx("flex h-full flex-col", className)}>
      <div
        className={cx(
          "flex justify-center overflow-hidden rounded-lg border bg-gradient-to-t shadow-lg",
          "border-neutral-200/50 from-neutral-200 to-neutral-100",
          "dark:border-neutral-800/50 dark:from-neutral-800 dark:to-neutral-900"
        )}
      >
        {data.map((item) => (
          <div
            key={item.label}
            className={cx(
              "group m-1 flex h-24 w-1/5 min-w-[110px] cursor-pointer select-none flex-col items-center justify-between rounded-md p-3 transition-all duration-300 hover:opacity-100",
              item.value === selected.value
                ? "bg-gradient-to-tr from-fuchsia-500/70 to-purple-500/70 text-neutral-50 opacity-100 shadow-inner dark:from-fuchsia-700/50 dark:to-purple-700/70"
                : "text-neutral-500 opacity-70 dark:text-neutral-200 dark:opacity-30 hover:dark:opacity-100"
            )}
            onClick={() => setSelect(item)}
          >
            <Icon
              icon={item.icon}
              className={cx(
                "h-6 w-6 md:h-[35px] md:w-[35px]",
                "[&_path]:fill-neutral-400 dark:[&_path]:fill-neutral-100",
                "[&_path[fill='#aaa']]:fill-neutral-200 dark:[&_path[fill='#aaa']]:fill-neutral-400",
                "[&_path[fill='#ffffff']]:fill-neutral-200 dark:[&_path[fill='#ffffff']]:fill-neutral-800",
                { "[&_path]:fill-neutral-50": item.value === selected.value }
              )}
            />
            <span className="text-center text-sm text-current">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div
        className={cx(
          "mt-3 flex justify-center overflow-hidden rounded-lg border bg-gradient-to-t shadow-lg",
          "border-neutral-200/50 from-neutral-200 to-neutral-100",
          "dark:border-neutral-800/50 dark:from-neutral-800 dark:to-neutral-900"
        )}
      >
        <div
          className={cx(
            "h-52 w-full overflow-auto",
            "[&_pre]:!bg-transparent [&_code]:!font-fira [&_code]:!text-xs [&_code]:sm:!text-sm",
            "[&_.linenumber]:!w-8 [&_.linenumber]:!text-neutral-300 dark:[&_.linenumber]:!text-neutral-700"
          )}
        >
          {
            <SyntaxHighlighter
              language={selected.syntax}
              style={atelierCaveDark}
              showLineNumbers
            >
              {selected.sample}
            </SyntaxHighlighter>
          }
        </div>
      </div>
      <div className="mt-2 flex gap-4 text-sm ">
        <a
          href={selected.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-neutral-600 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200"
        >
          <Icon size={20} icon="github" className="mr-1" />
          {selected.link.title}
        </a>
        <a
          href={selected.demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center text-neutral-600 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200"
        >
          <Icon
            size={19}
            icon={selected.demo.icon}
            className="mr-1 text-black opacity-70 group-hover:opacity-100 dark:text-white"
          />
          demo
        </a>
      </div>
    </div>
  );
};

export default Sample;
