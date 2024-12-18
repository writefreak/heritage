import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const AddBlogs = () => {
  return (
    <div className="flex flex-col h-screen py-14 gap-7">
      <div>
        <h2 className="text-3xl font-bold">Blogs</h2>
        <p>View all your blogs here</p>
      </div>
      <div className="w-[900px] flex items-center justify-between bg-[#030712] dark:bg-purple-700 text-white rounded-md  p-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">All Blogs</h2>
          <p className="text-sm">Find all new and existing blogs</p>
        </div>

        <Button
          variant={"outline"}
          className="flex items-center bg-transparent hover:bg-white/30 hover:text-white gap-3 dark:border-white dark:hover:bg-white/30"
        >
          <Plus />
          <span>New blog</span>
        </Button>
      </div>
    </div>
  );
};

export default AddBlogs;
