import { Route, Routes } from "react-router-dom";
import { PageTitle } from "../../../../../../_metronic/layout/core";
import { CourseSetup } from "./CourseSetup";
import { Fees } from "./Fees";
  let accountBreadCrumbs: any = [];



export const Setup: any = () => {

  return (
    <Routes>
        <Route
          path="course-setup"
          element={
            <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Course Setup</PageTitle>
                <CourseSetup />
            </>
          }
        />
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
            {/*<Caddies />*/}
          </>
        }
      />
    </Routes>
  );
}
