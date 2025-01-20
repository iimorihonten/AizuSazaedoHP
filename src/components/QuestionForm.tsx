import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface QuestionFormProps {
  language: "ja" | "en";
}

export const QuestionForm = ({ language }: QuestionFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to a server
    console.log({ name, email, question });
    
    toast({
      title: language === "ja" ? "送信完了" : "Submission Complete",
      description: language === "ja" 
        ? "お問い合わせありがとうございます。担当者より返信させていただきます。" 
        : "Thank you for your inquiry. We will get back to you soon.",
    });

    // Reset form
    setName("");
    setEmail("");
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className={`block mb-2 ${language === "ja" ? "font-yumin" : "font-noto"}`}>
          {language === "ja" ? "お名前" : "Name"}
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={language === "ja" ? "font-yugothic" : "font-noto"}
        />
      </div>

      <div>
        <label htmlFor="email" className={`block mb-2 ${language === "ja" ? "font-yumin" : "font-noto"}`}>
          {language === "ja" ? "メールアドレス" : "Email"}
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={language === "ja" ? "font-yugothic" : "font-noto"}
        />
      </div>

      <div>
        <label htmlFor="question" className={`block mb-2 ${language === "ja" ? "font-yumin" : "font-noto"}`}>
          {language === "ja" ? "ご質問内容" : "Question"}
        </label>
        <Textarea
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className={`min-h-[150px] ${language === "ja" ? "font-yugothic" : "font-noto"}`}
        />
      </div>

      <Button 
        type="submit"
        className={`w-full ${language === "ja" ? "font-yumin" : "font-noto"}`}
      >
        {language === "ja" ? "送信する" : "Submit"}
      </Button>
    </form>
  );
};