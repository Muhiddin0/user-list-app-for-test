import { Suspense } from "react";
import UserTable from "@/components/users/user-table";
import UserTableSkeleton from "@/components/users/user-table-skeleton";
import { UsersSearch } from "@/components/users/users-search";

export default function UsersPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Users</h1>
      <div className="mb-6">
        <UsersSearch />
      </div>
      <Suspense fallback={<UserTableSkeleton />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
