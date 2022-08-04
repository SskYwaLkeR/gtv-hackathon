import { NAV_ITEM } from "../../Constants/NavItem";
import { useRouter } from "next/router";
import cn from "classnames";
import s from "./Footer.module.css";

export const Footer = () => {
  const router = useRouter();
  return (
    <div className={s.container}>
      {NAV_ITEM.map((item) => (
        <button
          className={s.nav_item}
          key={item.id}
          onClick={() => router.push(item.link)}
        >
          <img
            className={s.icon}
            src={router.pathname === item.link ? item.activeIcon : item.icon}
            alt=""
          />
          <p
            className={cn(s.label, {
              [s.active_label]: router.pathname === item.link,
            })}
          >
            {item.label}
          </p>
        </button>
      ))}
    </div>
  );
};
