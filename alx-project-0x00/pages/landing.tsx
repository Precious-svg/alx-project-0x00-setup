import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card/>
        <main className="p-8 flex flex-wrap gap-4">
            {/* Small */}
           <Button title="Small Rounded-sm" styles="px-3 py-1 text-sm rounded-sm bg-blue-500 text-white" />
           <Button title="Small Rounded-md" styles="px-3 py-1 text-sm rounded-md bg-green-500 text-white" />
           <Button title="Small Rounded-lg" styles="px-3 py-1 text-sm rounded-full bg-purple-500 text-white" />

           {/* Medium */}
           <Button title="Medium Rounded-sm" styles="px-4 py-2 text-base rounded-sm bg-blue-600 text-white" />
           <Button title="Medium Rounded-md" styles="px-4 py-2 text-base rounded-md bg-green-600 text-white" />
           <Button title="Medium Rounded-lg" styles="px-4 py-2 text-base rounded-full bg-purple-600 text-white" />

           {/* Large */}
           <Button title="Large Rounded-sm" styles="px-6 py-3 text-lg rounded-sm bg-blue-700 text-white" />
           <Button title="Large Rounded-md" styles="px-6 py-3 text-lg rounded-md bg-green-700 text-white" />
           <Button title="Large Rounded-lg" styles="px-6 py-3 text-lg rounded-full bg-purple-700 text-white" />
      </main>

      </div>
    )
  }
  export default Landing