import React, { useState } from "react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";

const AccountPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col overflow-auto h-screen">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 pb-2 overflow-auto">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 px-2 overflow-auto">
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
              <h1 className="text-2xl font-bold">Account Page</h1>
            </div>

            <div className="flex flex-col flex-1 bg-gray-100 rounded-lg p-4 shadow-sm overflow-y-auto gap-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              molestiae natus provident minima repellendus nihil qui doloribus,
              labore quasi nisi accusantium libero quibusdam officiis voluptates
              tenetur ex voluptatum dolorem praesentium! Eos vitae eum accusamus
              atque dolores, modi velit ea laboriosam nihil fugiat earum sit
              iusto dolor, officiis ratione molestias, temporibus porro. Fugiat
              corrupti fugit quibusdam, fuga dignissimos esse architecto veniam
              repellendus ullam voluptatem enim dicta explicabo quaerat ab
              rerum, provident deleniti? Hic ullam nisi aut excepturi dicta fuga
              rerum facere delectus nesciunt nulla aliquam debitis impedit harum
              esse, vel quaerat numquam consectetur veritatis sit ipsam
              assumenda. Veniam esse eveniet temporibus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
