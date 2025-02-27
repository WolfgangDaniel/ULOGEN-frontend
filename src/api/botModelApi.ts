import axios from "axios";
import BotModel, {
  parseBotModel,
  stringifyBotModel,
} from "../interfaces/BotModel";

export default {
  async getBotModels(): Promise<BotModel[]> {
    const res = await axios.get("http://localhost:3001/api/BotModels");

    const botModels: BotModel[] = (res.data as BotModel[]).map((botModel) =>
      parseBotModel(botModel)
    );
    return botModels;
  },
  async getBotModel(botModelId: string): Promise<BotModel> {
    const res = await axios.get(
      `http://localhost:3001/api/BotModels/${botModelId}`
    );

    return parseBotModel(res.data as BotModel);
  },
  async generateUiLogs(botModelsForUiLog: any[]): Promise<BotModel[]> {
    try {
      const res = await axios.get<BotModel[]>(
        `http://localhost:3001/api/BotModels/generateUiLogs`,
        {
          params: {
            BotModelsForUiLog: botModelsForUiLog
          },
        }
      );
  
      return res.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  async getLinkedBotModel(
    botModelId: string,
    targetRpaTool: string
  ): Promise<Blob> {
    const res = await axios.get(
      `http://localhost:3001/api/BotModels/${botModelId}`,
      {
        params: {
          type: targetRpaTool,
        },
        responseType: "blob",
      }
    );
    return res.data;
  },
  async addBotModel(botModel: BotModel): Promise<BotModel> {
    botModel = stringifyBotModel(botModel);

    const res = await axios.post(
      "http://localhost:3001/api/BotModels",
      botModel
    );

    return parseBotModel(res.data as BotModel);
  },
  async updateBotModel(botModel: BotModel): Promise<BotModel> {
    botModel = stringifyBotModel(botModel);

    const res = await axios.patch(
      `http://localhost:3001/api/BotModels/${botModel._id}`,
      botModel
    );

    return res.data;
  },
  async deleteBotModel(botModelId: string): Promise<void> {
    await axios.delete(`http://localhost:3001/api/BotModels/${botModelId}`);

    return;
  },
};
