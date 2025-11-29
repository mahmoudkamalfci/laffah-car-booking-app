create register and login dialog components .
 that when user click on 
 تسجيل الدخول / إنشاء حساب in navbar component it should open the dialog and close it when user click on close button .
  this dialog handle login and register in the same dialog . 
 the dialog have three steps enter phone number, then second step otp will be send to whatsapp and show otp input , then third step is to fill name and password . I'll provide screen shot for every step. you have to use shadcn dialog component and make it responsive.
 if it's not exist you can install it using (pnpm dlx shadcn@latest add dialog) .
 also check global.css for global styles and package.json for dependencies.
 make as navigate between each step without fill data.
