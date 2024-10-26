import React from "react";
import styles from "@/styles/Navigate.module.css";
import Image from "next/image";
import IconNav from "./IconNav";
import IconSetting from "./IconSetting";
import NavMobile from "./NavMobile";
import { navRoute } from "../../lib";

const Navigate = ({openSearch,search}) => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo} onClick={() => openSearch(!search)}>
          <Image src="/logo.svg" alt="logo" width={50} height={50} priority={true}/>
      </div>
      <div className={styles.nav}>
        {navRoute.map((item, index) => (
          <IconNav key={index} name={item.name} route={item.route} />
        ))}
      </div>
      <div className={styles.setting}>
        <IconSetting name="Facebook" link="https://www.facebook.com/hanhtrinhssg" />
        <IconSetting name="Email" link="mailto:hanhtrinhssg@gmail.com" />
      </div>
      <div className={styles.mobile}>
        <NavMobile />
      </div>
    </nav>
  );
};

export default Navigate;
