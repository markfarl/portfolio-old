import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import App from './pages/App'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "dashboard",
          element: <App />,
        },
      ],
    },
  ]);

export default function Router(){
    return(
        <RouterProvider
            router={router}
        />
    )
}