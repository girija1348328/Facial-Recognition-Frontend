// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// interface EmployeeFormProps {
//   onClose: () => void;
//   onSubmit: (e: React.FormEvent) => void;
// }

// const EmployeeForm = ({ onClose, onSubmit }: EmployeeFormProps) => {
//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Add Employee</DialogTitle>
//         </DialogHeader>
        
//         <form onSubmit={onSubmit} className="grid gap-4 py-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               name="name"
//               placeholder="Employee Name"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="status">Status</Label>
//             <Select name="status" required>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Active">Active</SelectItem>
//                 <SelectItem value="Inactive">Inactive</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="description">Designation</Label>
//             <Input
//               id="description"
//               name="description"
//               placeholder="Employee Designation"
//             />
//           </div>

//           <div className="flex justify-end gap-2 pt-4">
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button type="submit">Save</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EmployeeForm;