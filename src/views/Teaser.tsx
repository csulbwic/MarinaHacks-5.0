import { motion } from "framer-motion";

// A teaser landing page with centered text and a black half-opacity background overlay.

export const Teaser = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered messages */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white drop-shadow"
        >
          Something's in the water...
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-lg font-bold tracking-tight text-white drop-shadow"
        >
          MarinaHacks 5.0 Coming Soon...
        </motion.h2>
      </div>
    </div>
  );
}
