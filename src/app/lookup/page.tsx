import { CardLookupForm } from "@/components/lookupForm/card-lookup-form";
import TypeForm from "@/components/lookupForm/typeForm";
import { Card } from "@/components/ui/card";
import { Typography } from "@mui/material";

export default function LookupPage() {
  return (
    <div>
      <div className="flex justify-center">
        <Card className="p-5 w-full md:w-[400px] h-[350px]">
          <CardLookupForm />
        </Card>
      </div>
    </div>
  )
}