import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/modal";

import useStore from "@/zustand/store/useStore";

import ContactModal from "@/components/Modals/ContactModal/ContactModal";
import ModalContentContactUs from "@/components/Modals/ContactModal/ModalContentContactUs";

const ContactUsBtn = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { translations } = useStore();
  return (
    <div className="p-1 flex-1">
      <Button
        className="bg-transparent hover:bg-customGreen border border-customGreen text-customGreen hover:text-white w-full rounded-md href=${} text-lg"
        onPress={onOpen}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="align-middle me-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
        </svg>
        {translations.PropertyPage.btnContactUS}
      </Button>
      <ContactModal
        isOpen={isOpen}
        onClose={onClose}
        title={translations.Modal.contactUs}
      >
        <ModalContentContactUs />
      </ContactModal>
    </div>
  );
};

export default ContactUsBtn;
