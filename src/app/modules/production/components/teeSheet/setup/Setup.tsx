import { Outlet, Route, Routes } from "react-router-dom";
import { PageTitle } from "../../../../../../_metronic/layout/core";
import { CourseSetup } from "./CourseSetup";
import { Fees } from "./Fees";
import { CaddiesTable } from "./caddies/CaddiesTable";
import AddCourseSetup from "./AddCourseSetup";
  let accountBreadCrumbs: any = [];



export const Setup: any = () => {

  return (
    <Routes>
        <Route
          path="course-setup"
          element={
            <>hhgh
                <Outlet />
            </>
          }
        >
          <Route
            path="/"
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Course Setup</PageTitle>
                <CourseSetup />
              </>
            }
          />
          <Route
            path="add"
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Add Course Setup</PageTitle>
                <AddCourseSetup />
              </>
            }
          />
        </Route>
      <Route
        path="fees"
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Fees Setup</PageTitle>
            <Fees />
          </>
        }
      />
      <Route
        path="caddies"
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Caddies Setup</PageTitle>
            <CaddiesTable />
          </>
        }
      />
    </Routes>
  );
}
