import { useState } from 'react'
import './App.css'

function App() {
  

  return (
     <div className="App">
        <div className="flex">
          <h1 className="text-center text-lg text-blue-400 mt-2 ml-2 font-mono font-exstrabold">Heading styled with tailwind</h1>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2 mx-2">
            <div className="h-16 rounded-full bg-red-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus aliquam consequuntur animi odit sapiente excepturi soluta quod porro incidunt distinctio, tempore in a. Sint maiores earum delectus aspernatur culpa quidem voluptatum, necessitatibus ab eius id. Quod provident laboriosam, beatae assumenda ab quam voluptatem nostrum ipsum non voluptas, quia perferendis.</div>
            <div className="h-16 rounded-full bg-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est molestiae labore beatae a repellat, in eum distinctio aspernatur aliquam maxime eveniet consequatur amet nulla dolorum voluptatum praesentium quia quasi optio? Quia, aperiam. Unde perferendis, rem explicabo dolor consectetur doloremque. Repellendus in quaerat dicta eligendi vitae ullam enim, dolore voluptate architecto maxime illo totam, voluptatem modi repellat, odio veritatis commodi.</div>
            <div className="h-16 rounded-full bg-green-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam maxime ratione voluptatibus in iure at odit similique molestias illum voluptatum vitae nihil harum animi debitis assumenda maiores sit nisi voluptate, commodi eum. Iure mollitia, repellendus corporis ducimus labore id?</div>
        </div>
      </div>
  )
}

export default App
