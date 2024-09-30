import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './pages/App'
import Portfolio from './pages/Portfolio'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    children: [
      {
        path: "dashboard",
        element: <App />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <RouterProvider
      router={router}
    />
  )
}