"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { User } from "@/lib/types"
import { Briefcase, Building, Calendar, CreditCard, Mail, MapPin, Phone, UserIcon } from "lucide-react"

interface UserDialogProps {
  user: User
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserDialog({ user, open, onOpenChange }: UserDialogProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback>{getInitials(user.firstName, user.lastName)}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-muted-foreground">{user.username}</p>
              <Badge className="mt-2">{user.role}</Badge>
            </div>
          </div>

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="address">Address</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Born {formatDate(user.birthDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {user.gender}, {user.age} years old
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm font-medium">Physical</p>
                    <p className="text-sm text-muted-foreground">
                      Height: {user.height}cm, Weight: {user.weight}kg
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Eyes: {user.eyeColor}, Hair: {user.hair.color} ({user.hair.type})
                    </p>
                    <p className="text-sm text-muted-foreground">Blood Type: {user.bloodGroup}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="work" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{user.company.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{user.company.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>Department: {user.company.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{user.university}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium">Company Address</p>
                  <p className="text-sm text-muted-foreground">
                    {user.company.address.address}, {user.company.address.city}, {user.company.address.state}{" "}
                    {user.company.address.postalCode}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm font-medium">Banking</p>
                    <p className="text-sm text-muted-foreground">
                      <CreditCard className="h-3 w-3 inline mr-1" />
                      {user.bank.cardType} ending in {user.bank.cardNumber.slice(-4)}
                    </p>
                    <p className="text-sm text-muted-foreground">Expires: {user.bank.cardExpire}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="address" className="space-y-4 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}
                  </span>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium">Country</p>
                  <p className="text-sm text-muted-foreground">{user.address.country}</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium">Coordinates</p>
                  <p className="text-sm text-muted-foreground">
                    Lat: {user.address.coordinates.lat}, Lng: {user.address.coordinates.lng}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm font-medium">Network</p>
                    <p className="text-sm text-muted-foreground">IP: {user.ip}</p>
                    <p className="text-sm text-muted-foreground">MAC: {user.macAddress}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

