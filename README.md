# gta6-clipper-01 — clip 1: "Jason Mandi di GTA VI, Windah Ngakak!"

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views"
($500, top 20 share). Places go by the video's views at the deadline.

## The clip

GTA VI gameplay: Jason taking a shower, with the on-screen "SHOWER"
prompt — the absurdity of a realistic shower moment in GTA VI — plus
Windah Basudara's laughing reaction in the facecam. The clip then
pitches make.fun on screen ("Bikin klip pakai AI / dapat cuan di
make.fun") in its last 5 seconds.

- Video (public Short): https://www.youtube.com/shorts/pAp_6FWf8Cs
- Channel: @hu2dzwynnn
- Format: vertical 576x1024, 21.00 s

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. That is
all the program has to do — the entry is the video, and the house reads
its views through the YouTube Data API.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
