import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "@/app/routes/app-routes";
import {Suspense} from "react";
import Layout from '@/pages/layout/layout';

function App() {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: (
        <>
          <Layout/>
          {/* <ScrolTop/> */}
        </>
      ),
      children: [

      ]
    }
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
