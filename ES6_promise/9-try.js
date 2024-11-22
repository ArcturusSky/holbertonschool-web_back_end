export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally { // same behaviour as promise.finally
    queue.push('Guardrail was processed');
  }
  return queue;
}
