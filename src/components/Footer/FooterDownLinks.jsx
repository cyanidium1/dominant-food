import { PiTelegramLogoLight, PiTiktokLogoLight } from "react-icons/pi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

const FooterDownLinks = () => {
  return (
    <ul className="list-none md:text-end text-center flex justify-center items-center">
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a href="https://t.me/CACTUS_Real_Estate" target="_blank">
            <PiTelegramLogoLight className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            href="https://www.tiktok.com/@aleccactus?_t=8nAIu5l3kbW&_r=1"
            target="_blank"
          >
            <PiTiktokLogoLight className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>

      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            className=" text-gray-400 hover:text-white "
            href="https://www.facebook.com/CactusRealEstateAlbania/"
            target="_blank"
          >
            <FiFacebook className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            className=" text-gray-400 hover:text-white"
            href="https://www.instagram.com/cactus_realestate/"
            target="_blank"
          >
            <FaInstagram className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            className=" text-gray-400 hover:text-white"
            href="mailto:cactusbusines@gmail.com"
          >
            <AiOutlineMail className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>
      <li className="ms-1">
        <div className="flex justify-center items-center w-[28px] h-[28px] border border-gray-500  dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
          <a
            href="https://api.whatsapp.com/send?phone=355685577016"
            target="_blank"
          >
            <FaWhatsapp className=" text-gray-400 hover:text-white " />
          </a>
        </div>
      </li>
    </ul>
  );
};

export default FooterDownLinks;
