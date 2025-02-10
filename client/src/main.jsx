import HomePages from "./Pages/HomePages.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import WritePage from "./Pages/WritePage.jsx";
import SinglePostPage from "./Pages/SinglePostPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import PostListPages from "./Pages/PostListPages.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/posts",
        element: <PostListPages />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
    ],
  },
]);

const clerkpuplishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkpuplishableKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkpuplishableKey} afterSignOutUrl={"/"}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
