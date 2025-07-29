// import { useState } from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { Button } from '@/components/ui/button';
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
// import { Badge } from './ui/badge';
// import EmployeeForm from './EmployeeForm';



// const ViewEmployees = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [rows, setRows] = useState([
//     { ID: "9875", Name: "Priya", Status: "Active", Description: "HR" },
//     { ID: "2643", Name: "Rahul", Status: "Inactive", Description: "Employee" },
//     { ID: "9835", Name: "Nisha", Status: "Active", Description: "Manager" },
//   ]);

//   const handleAddEmployee = (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const newRow = {
//       ID: form.id.value,
//       Name: form.name.value,
//       Status: form.status.value,
//       Description: form.description.value,
//     };
//     setRows([...rows, newRow]);
//     setShowForm(false);
//   };

//   return (
//     <div className="p-6 max-w-full overflow-x-hidden">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//         <h3 className="text-xl font-semibold">EMPLOYEE DETAILS</h3>
//         <Button 
//           variant="outline" 
//           className="bg-gray-200 text-gray-700 hover:bg-gray-300 w-full sm:w-auto"
//           onClick={() => setShowForm(true)}
//         >
//           Add Employee
//         </Button>
//       </div>

//       {/* Table Section */}
//       <div className="rounded-md border overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Description</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {rows.map((row, idx) => (
//               <TableRow key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                 <TableCell>{row.ID}</TableCell>
//                 <TableCell>{row.Name}</TableCell>
//                 <TableCell>
//                   <Badge 
//                     variant={row.Status === 'Active' ? 'success' : 'destructive'}
//                     className="whitespace-nowrap"
//                   >
//                     {row.Status}
//                   </Badge>
//                 </TableCell>
//                 <TableCell>{row.Description}</TableCell>
//                 <TableCell className="flex gap-4">
//                   <FaEdit className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
//                   <FaTrash className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Employee Form Modal */}
//       {showForm && (
//         <EmployeeForm
//           onClose={() => setShowForm(false)}
//           onSubmit={handleAddEmployee}
//         />
//       )}
//     </div>
//   );
// };

// export default ViewEmployees;