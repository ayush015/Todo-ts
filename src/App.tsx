import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { HeaderRight } from "./components/HeaderRight/HeaderRight";
import { Modal } from "./components/Modal/Modal";

const App = (props: any) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Header name="Ayush Srivastava" imageSrc="https://picsum.photos/200/300">
        <HeaderRight />
      </Header>
      <Modal modalOpen={open} cancleButton={true} />
      <button>openModal</button>
    </>
  );
};

export default App;
