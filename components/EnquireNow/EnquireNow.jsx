"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const EnquireNow = () => {
  return (
    <div className="fixed bottom-1/4 -right-14 -rotate-90">
      <Sheet>
        <SheetTrigger>
          <button className="bg-[#ec1d23] px-7 pb-5 pt-2.5 text-white text-xl rounded-t-xl cursor-pointer">
            Enquire Now
          </button>
        </SheetTrigger>
        <SheetContent className="max-h-[500px] overflow-y-auto mt-[75px] border-y border-red-500">
          <SheetHeader>
            <SheetTitle>Chartered Housing Project</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>

          {/* Select Projects */}
          <div className="px-4">
            <Select>
              <SelectTrigger className="w-full rounded-none">
                <SelectValue placeholder="Choose Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <label htmlFor="sheet-demo-name">Name</label>
              <input id="sheet-demo-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <label htmlFor="sheet-demo-username">Username</label>
              <input id="sheet-demo-username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button
              type="submit"
              className="rounded-none bg-[#ec1d23] text-white hover:bg-[#ec1d23] cursor-pointer"
            >
              Save changes
            </Button>
            <SheetClose asChild>
              <Button
                variant="outline"
                className="rounded-none border-[#ec1d23] cursor-pointer"
              >
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default EnquireNow
