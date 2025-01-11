import {
  createTable,
  schemaMigrations,
} from "@nozbe/watermelondb/Schema/migrations";

export default schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        createTable({
          name: "allocations",
          columns: [
            { name: "income", type: "number" },
            { name: "created_at", type: "number" },
          ],
        }),
      ],
    },
  ],
});
