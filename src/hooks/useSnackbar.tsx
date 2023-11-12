import React, { useState } from "react";

export default function useSnackbar() {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function showSnackbar(status: boolean, msg: string | null) {
    setToggle(status);
    setMessage(msg);
  }

  function Snackbar() {
    if (!toggle) return null;
    return (
      <div className="fixed top-6 right-0 bg-white flex justify-center items-center gap-4 px-6 py-2 rounded-lg shadow-lg transition-all ease-in-out duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="#32B550"
          className="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <div>
          <p className="font-bold text-[#28A745]">
            Laporan Anda Berhasil Terkirim
          </p>
          <p className="font-bold text-primary-800">
            dan Akan Segera Kami Tindak Lanjuti
          </p>
        </div>
      </div>
    );
  }

  return { showSnackbar, Snackbar };
}
