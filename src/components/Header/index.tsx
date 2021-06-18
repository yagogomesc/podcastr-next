import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

import styles from "./styles.module.scss";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", { locale: ptBR });

  return (
    <header className={styles.headerContainer}>
      <img src="/adsr-logo.png" alt="Podcastr" />

      <p>Um podcast com conversas sobre Speedrun e muito mais.</p>

      <span>{currentDate}</span>
    </header>
  );
}
