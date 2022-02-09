import { Mcap0Types } from "@foxglove/mcap";

export type TestDataRecord = Mcap0Types.TypedMcapRecords[
  | "Message"
  | "Schema"
  | "ChannelInfo"
  | "Attachment"
  | "Metadata"];

export enum TestFeatures {
  UseChunks = "ch",
  UseMessageIndex = "mx",
  UseStatistics = "st",
  UseRepeatedSchemas = "rsh",
  UseRepeatedChannelInfos = "rch",
  UseAttachmentIndex = "ax",
  UseMetadataIndex = "mdx",
  UseChunkIndex = "chx",
  UseSummaryOffset = "sum",
  AddExtraDataToRecords = "pad",
}

export type TestInput = {
  baseName: string;
  records: TestDataRecord[];
};

export type TestVariant = TestInput & {
  name: string;
  features: Set<TestFeatures>;
};