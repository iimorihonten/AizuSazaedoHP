import { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_2tjb1jg";
const EMAILJS_TEMPLATE_ID = "template_pzqtsrk";
const EMAILJS_PUBLIC_KEY = "kCfpp_q8NOAOVZkFW";

emailjs.init(EMAILJS_PUBLIC_KEY);

const formSchema = z.object({
  name: z.string().min(1, {
    message: "お名前を入力してください",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください",
  }),
  message: z.string().min(10, {
    message: "メッセージは10文字以上で入力してください",
  }),
});

const Contact = () => {
  const [language, setLanguage] = useState<"ja" | "en">("ja");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: 'Iimori Honten',
        to_email: 'iimorihonten@icloud.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: language === "ja" ? "送信完了" : "Message Sent",
        description: language === "ja" 
          ? "お問い合わせありがとうございます。内容を確認次第ご連絡させていただきます。"
          : "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: language === "ja" ? "エラー" : "Error",
        description: language === "ja" 
          ? "送信に失敗しました。しばらく経ってからもう一度お試しください。"
          : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = {
    ja: {
      title: "お問い合わせ",
      description: "拝観、取材など会津さざえ堂に関するお問い合わせは有限会社 山主飯盛本店までお問い合わせください。",
      tel: "TEL: 0242-22-3163",
      fax: "FAX: 0242-25-3419",
      email: "メール: iimorihonten@icloud.com"
    },
    en: {
      title: "Contact Us",
      description: "For inquiries about visits, media coverage, or any other matters related to Aizu Sazaedo, please contact Iimori Honten Co., Ltd.",
      tel: "Tel: +81-242-22-3163",
      fax: "Fax: +81-242-25-3419",
      email: "Email: iimorihonten@icloud.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        content={content[language]} 
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className={`text-3xl mb-8 ${language === "ja" ? "font-yumin" : "font-playfair"}`}>
          {contactInfo[language].title}
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className={`space-y-4 ${language === "ja" ? "font-yugothic" : "font-noto"}`}>
                <p className="text-lg">{contactInfo[language].description}</p>
                <div className="space-y-2">
                  <p>{contactInfo[language].tel}</p>
                  <p>{contactInfo[language].fax}</p>
                  <p>{contactInfo[language].email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{language === "ja" ? "お名前" : "Name"}</FormLabel>
                    <FormControl>
                      <Input placeholder={language === "ja" ? "山田 太郎" : "John Doe"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{language === "ja" ? "メールアドレス" : "Email"}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{language === "ja" ? "お問い合わせ内容" : "Message"}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={
                          language === "ja" 
                            ? "お問い合わせ内容をご記入ください" 
                            : "Please enter your message here"
                        } 
                        className="h-32" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting 
                  ? (language === "ja" ? "送信中..." : "Sending...") 
                  : (language === "ja" ? "送信する" : "Send Message")}
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Contact;