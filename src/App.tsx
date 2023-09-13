import { FileVideo, Github, Upload, Wand2 } from "lucide-react";

import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <nav className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed by ♥️ at NLW by Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" /> Github
          </Button>
        </nav>
      </header>

      <section className="flex-1 p-6 flex gap-6">
        <main className="flex flex-col flex-1 gap-4">
          <section className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Add the prompt here"
            />

            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Result"
              readOnly
            />
          </section>

          <p className="text-sm text-muted-foreground">
            Remember, you can use the <code>{"{transcription}"}</code> variable
            in your prompt to add the transcript content of the selected video.
          </p>
        </main>

        <aside className="flex flex-col gap-6 w-80 space-y-">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex aspect-video cursor-pointer flex-col gap-2 items-center justify-center text-sm text-muted-foreground hover:bg-white/5"
            >
              <FileVideo className="w-8 h-8" />
              Load video file
            </label>

            <input
              type="file"
              id="video"
              className="sr-only"
              accept="video/mp4"
            />

            <div className="space-y-2">
              <Label htmlFor="transcription-prompt" className="">
                Transcription prompt
              </Label>
              <Textarea
                id="transcription-prompt"
                className="h-20 resize-none leading-relaxed"
                placeholder="Add the video key words here"
              />
            </div>

            <Button type="submit" className="w-full">
              <Upload className="w-4 h-4 mr-2" />Upload video
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="transcription-prompt">Prompt</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="youtube-title">Youtube title</SelectItem>
                  <SelectItem value="youtube-description">
                    Youtube description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transcription-prompt">Model</Label>

              <Select defaultValue="gpt-3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt-3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <p className="text-sm text-muted-foreground">
                You will be able to change this in the next version.
              </p>
            </div>

            <div className="space-y-4">
              <Label htmlFor="transcription-prompt">Temperature</Label>

              <Slider min={0} max={1} step={0.1} />

              <p className="text-sm text-muted-foreground">
                Higher values ​​tend to make the result more creative but less
                accurate.
              </p>
            </div>

            <Button type="submit" className="w-full">
              <Wand2 className="w-4 h-4 mr-2" />Run
            </Button>
          </form>
        </aside>
      </section>
    </main>
  );
}
