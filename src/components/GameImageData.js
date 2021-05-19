import * as Tone from "tone";

export const GameImageData = [
  {
    image: "https://i.imgur.com/5FzyqGN.png",
    alt: "A cute cartoon sheep",
    sample: function playSample() {
      const synth = new Tone.Synth().toDestination();
      const now = Tone.now()
      synth.triggerAttackRelease("A4", "8n", now)
      synth.triggerAttackRelease("G4", "8n", now + 0.5)
      synth.triggerAttackRelease("F4", "8n", now + 1)
      synth.triggerAttackRelease("G4", "8n", now + 1.5)
      synth.triggerAttackRelease("A4", "8n", now + 2)
      synth.triggerAttackRelease("A4", "8n", now + 2.5)
      synth.triggerAttackRelease("A4", "8n", now + 3)
    }
  }, 
  { 
    image: "https://i.imgur.com/aiGacMd.png",
    alt: "A happy cartoon scarecrow",
    sample: function playSample() {
      const synth = new Tone.Synth().toDestination();
      const now = Tone.now()
      synth.triggerAttackRelease("G4", "8n", now)
      synth.triggerAttackRelease("G4", "8n", now + 0.5)
      synth.triggerAttackRelease("G4", "8n", now + 1)
      synth.triggerAttackRelease("D4", "8n", now + 1.5)
      synth.triggerAttackRelease("E4", "8n", now + 2)
      synth.triggerAttackRelease("E4", "8n", now + 2.5)
      synth.triggerAttackRelease("D4", "4n", now + 3)
    }
  },
  { 
    image: "https://i.imgur.com/LEf358A.png",
    alt: "A cartoon moon and stars",
    sample: function playSample() {
      const synth = new Tone.Synth().toDestination();
      const now = Tone.now()
      synth.triggerAttackRelease("C4", "8n", now)
      synth.triggerAttackRelease("C4", "8n", now + 0.5)
      synth.triggerAttackRelease("G4", "8n", now + 1)
      synth.triggerAttackRelease("G4", "8n", now + 1.5)
      synth.triggerAttackRelease("A4", "8n", now + 2)
      synth.triggerAttackRelease("A4", "8n", now + 2.5)
      synth.triggerAttackRelease("G4", "8n", now + 3)
    }
  }
];