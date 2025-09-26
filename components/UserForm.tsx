"use client";

import { Dispatch, SetStateAction } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import Debossed from "./ironclad/Debossed";
import Container from "./ironclad/Container";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

import { useToggle } from "@/hooks/useToggle";
import provinces from "@/lib/provinces.json";
import { userFormSchema } from "@/lib/formSchemas";
import { addUser } from "@/lib/api/users/userApi";

interface UserFormProps {
  setCurrentAvatar: Dispatch<SetStateAction<string>>;
}

type FormValues = z.infer<typeof userFormSchema>;

const UserForm = (props: UserFormProps) => {
  const [includeGuard, toggleIncludeGuard] = useToggle(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(userFormSchema) as Resolver<FormValues>,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "GENERAL",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      province: "",
      postalCode: "",
      userAvatar: undefined,
      note: "",
      employmentStatus: "ACTIVE",
      hourlyRate: 0,
      licenseNumber: null,
      smartServe: null,
      casualAttire: false,
      semiFormalAttire: false,
      formalAttire: false,
      guardNotes: "",
    }, // TODO: create two objects for default values and combine with spread operator
  });

  const onSubmit = (values: FormValues) => {
    const formData = new FormData();
    // add includeGuard to formSchema for routes (not required on DB)
    formData.append("includeGuard", includeGuard ? "true" : "false");

    for (let key in values) {
      const typedKey = key as keyof typeof values;
      formData.append(key, values[typedKey] as any);
    }

    addUser(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-8`}>
        <Container className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">First Name</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input placeholder="First Name" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" className="field-inner" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Container>

        <Container className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Email</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input type="email" placeholder="Email" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Password</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input type="password" placeholder="Password" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Role</FormLabel>
                <FormControl>
                  <Debossed innerClassName="flex items-center h-full w-full">
                    <Select onValueChange={field.onChange} defaultValue="GENERAL">
                      <SelectTrigger className="w-full field-inner">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        {/* TODO: update role values to object & map through them*/}
                        <SelectItem value="GENERAL">GENERAL</SelectItem>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                      </SelectContent>
                    </Select>
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Container>

        <Container className="grid grid-cols-6 gap-4">
          <FormField
            control={form.control}
            name="streetAddress"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="ml-2">Street</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input type="text" placeholder="Street" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">City</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input type="text" placeholder="City" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Province</FormLabel>
                <FormControl>
                  <Debossed>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full field-inner">
                        <SelectValue placeholder="Province" />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map((province) => (
                          <SelectItem key={province.abbreviation} value={province.abbreviation}>
                            {province.abbreviation.toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Postal Code</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input type="text" placeholder="Postal Code" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-2">Phone Number</FormLabel>
                <FormControl>
                  <Debossed>
                    <Input type="text" placeholder="Phone Number" className="field-inner" {...field} />
                  </Debossed>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Container>

        <FormField
          control={form.control}
          name="userAvatar"
          render={({ field }) => (
            <FormItem className="pr-2 w-1/2">
              <FormLabel className="ml-2">Avatar</FormLabel>
              <FormControl>
                <Debossed>
                  <Input
                    type="file"
                    className="field-inner"
                    accept="image/png,image/jpeg"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (!file) return;
                      field.onChange(file);
                      props.setCurrentAvatar(URL.createObjectURL(file));
                    }}
                  />
                </Debossed>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="pr-2 w-1/2">
              <FormLabel className="ml-2">Note</FormLabel>
              <FormControl>
                <Debossed>
                  <Textarea placeholder="Note" maxLength={280} className="field-inner resize-none min-h-[100px]" {...field} />
                </Debossed>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Container className="flex items-center gap-2 pl-1">
          <Checkbox id="guard-toggle" onCheckedChange={toggleIncludeGuard} />
          <Label htmlFor="guard-toggle">Include Guard Information</Label>
        </Container>

        {includeGuard && (
          <>
            <Container className="grid grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="employmentStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Employment Status</FormLabel>
                    <FormControl>
                      <Debossed>
                        <Select onValueChange={field.onChange} defaultValue="ACTIVE">
                          <SelectTrigger className="w-full field-inner">
                            <SelectValue placeholder="Employment" />
                          </SelectTrigger>
                          <SelectContent>
                          {/* TODO: Map on object instead */}
                            <SelectItem value="ACTIVE">Active</SelectItem>
                            <SelectItem value="INACTIVE">Inactive</SelectItem>
                            <SelectItem value="Terminated">Terminated</SelectItem>
                          </SelectContent>
                        </Select>
                      </Debossed>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Hourly Rate</FormLabel>
                    <FormControl>
                      <Debossed>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="Hourly Rate"
                          className="field-inner"
                          {...field}
                          value={field.value ?? ""} // ensures controlled
                          // TODO: add default value of $20
                        />
                      </Debossed>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Container>

            <Container className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Attach Security License</FormLabel>
                    <FormControl>
                      <Debossed>
                        <Input
                          type="file"
                          className="field-inner"
                          accept=".pdf,image/png,image/jpeg"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            if (!file) return;
                            field.onChange(file);
                          }}
                        />
                      </Debossed>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="smartServe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="ml-2">Attach Smart Serve</FormLabel>
                    <FormControl>
                      <Debossed>
                        <Input
                          type="file"
                          className="field-inner"
                          accept=".pdf,image/png,image/jpeg"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            if (!file) return;
                            field.onChange(file);
                          }}
                        />
                      </Debossed>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Container>

            <Container className="flex items-center gap-4 ml-2">
              <FormField
                control={form.control}
                name="casualAttire"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormControl>
                      <Checkbox
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                        }}
                      />
                    </FormControl>
                    <FormLabel>Casual</FormLabel>
                    <FormMessage /> 
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="semiFormalAttire"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormControl>
                      <Checkbox
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                        }}
                      />
                    </FormControl>
                    <FormLabel>Semi-Formal</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="formalAttire"
                render={({ field }) => (
                  <FormItem className="flex items-center">
                    <FormControl>
                      <Checkbox
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                        }}
                      />
                    </FormControl>
                    <FormLabel>Formal</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Container>

            <FormField
              control={form.control}
              name="guardNotes"
              render={({ field }) => (
                <FormItem className="pr-2 w-1/2">
                  <FormLabel className="ml-2">Guard Notes</FormLabel>
                  <FormControl>
                    <Debossed>
                      <Textarea placeholder="Guard Notes" maxLength={280} className="field-inner resize-none min-h-[100px]" {...field} />
                    </Debossed>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <Button type="submit" className="!mx-auto w-1/2 p-6 flex mb-4">
          COMPLETE
        </Button>
      </form>
    </Form>
  );
};

export default UserForm;
