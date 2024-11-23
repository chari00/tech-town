import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Welcome to Material Tailwind
          </Typography>
          <Typography>
            This is a simple example of using Material Tailwind components in a Vite React project.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App