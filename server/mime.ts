/* eslint-disable array-bracket-newline */

const mimeTypes = {
  "video/mp4": ["mp4", "mp4v", "mpg4"],
  "video/x-matroska": ["mkv", "mk3d", "mks"],
  "video/quicktime": ["mov", "qt"],
  "video/webm": ["webm"],
  "video/x-flv": ["flv"],
  "video/x-msvideo": ["avi"],
  "video/ogg": ["ogv"],
  "video/x-m4v": ["m4v"],
  "video/h264": ["h264"],
  "application/x-mpegURL": ["m3u", "m3u8"],
};

export function getMimeType(extension: string): string | undefined {
  for (const [mimeType, extensions] of Object.entries(mimeTypes)) {
    if (extensions.includes(extension)) {
      return mimeType;
    }
  }
}

export function isSupportedMimeType(mimeType: string): boolean {
  if (mimeType === "application/x-mpegURL") {
    return true;
  }
  return !!/^video\/(?!x-flv)(?!x-matroska)(?!x-ms-wmv)(?!x-msvideo)[a-z0-9-]+$/.exec(mimeType);
}

module.exports = {
  getMimeType,
  isSupportedMimeType,
};
export default {
  getMimeType,
  isSupportedMimeType,
};
